// require("electron-reload")(__dirname, {
//     electron: require(`${__dirname}/node_modules/electron`)
// });
const {app, BrowserWindow, ipcMain:api, dialog, ipcMain} = require("electron");
const builder = require("electron-builder");
const Platform = builder.Platform;
const fs = require("fs");
const path = require("path");
var setting_path = "";


function createWindow(){
    const win = new BrowserWindow({
        minWidth: 500,
        minHeight: 500,
        autoHideMenuBar: true,
        title: "ScriptGUI",
        webPreferences: {
            devTools: false,
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: "/sources/img/icon.svg",
    });
    win.loadFile(path.join(`${__dirname}/sources/index.html`));

    ipcMain.on("save_file_new", (e, value, tab_index)=>{
        dialog.showSaveDialog(win).then(res=>{
            if(!(res.canceled)){
                let name_file = res.filePath.split("/")[res.filePath.split("/").length - 1];
                const result = {
                    name_file, 
                    err: false,
                    path: res.filePath,
                    value
                };
                fs.writeFileSync(res.filePath, value, {encoding: "utf-8"});
                e.sender.send("save_file_new_result", result, tab_index);
            }else{
                e.sender.send("save_file_new_result", {err: true}, tab_index);
            }
        }).catch((err)=>{
            e.sender.send("save_file_new_result", {err: true}, tab_index);
            console.log(err);
        })
    })
    ipcMain.on("save_file", (e, value, tab_index)=>{
        fs.writeFileSync(`${value.dir}`, value.val, {encoding: "utf-8"});
        e.sender.send("save_file_result", {val: value.val}, tab_index);
        if(value.dir === setting_path) e.sender.send("reload_page");
    });
    ipcMain.on("open_file", (e)=>{
        dialog.showOpenDialog(win, {
            properties: ["openFile"]
        }).then((res)=>{
            if(!res.canceled){
                fs.readFile(res.filePaths[0], {encoding: "utf-8"}, (err, val)=>{
                    if(!err) e.sender.send("recibe_file", res.filePaths[0], val);
                    else{
                        e.sender.send("recibe_file", undefined, undefined, "true");
                        console.log(err);
                    }
                });    
            }
        }).catch(err=>{
            console.log(err);
            e.sender.send("recibe_file", undefined, undefined, true);
        })
    })
    ipcMain.on("new-file", (e)=>{
        dialog.showSaveDialog(win).then((res)=>{
            if(!res.canceled){
                fs.writeFileSync(res.filePath, "", {encoding: "utf-8"})
                e.sender.send("new-file-data", res.filePath)
            }
        }).catch(err=>{
            console.log(err);
            e.sender.send("recibe_file", undefined, undefined, true);
        })
    })

    ipcMain.on("open_server", (e, credentials)=>{
        const file = credentials.dir.split("/")[credentials.dir.split("/").length - 1];
        const dir = credentials.dir.replace(file, "");
        const port = Math.random() * (9000 - 1000) + 1000
        const server = require("./server/app")(dir, file)
        server.listen(parseInt(port), ()=>{
            console.log(`Aberto na url http://localhost:${parseInt(port)}`);
            e.sender.send("open_window", `http://localhost:${parseInt(port)}`)
            ipcMain.on("close_server", (e)=>{
                server.close()
            })
        });
    })

    ipcMain.on("run_script", (e, dir)=>{
        require("./server/run_script")(dir);
    })

    ipcMain.on("get_settings", (e)=>{
        fs.readFile(setting_path, {encoding: "utf-8"}, (err, val)=>{
            if(!err) e.sender.send("recibe_file", setting_path, val);
            else{
                e.sender.send("recibe_file", undefined, undefined, "true");
                console.log(err);
            }
        });
    })


    ipcMain.on("get_load", (e)=>{
        e.sender.send("load_default", fs.readFileSync(setting_path, {encoding: "utf-8"}));
    })
    ipcMain.on("close_file", (e, dir)=>{
        e.sender.send("close_file_f", dir);
    })
    ipcMain.on("get_files", (e, dirs)=>{
        let datas = [];
        for(const dir of dirs){
            datas.push({
                data: fs.readFileSync(dir, {encoding: "utf-8"}),
                dir
            })
        }
        e.sender.send("render_last_files", datas)
    })
    ipcMain.on("save_setting", (e, data)=>{
        switch(process.platform){
            case "linux":
                fs.writeFileSync(`/home/${process.env.USER}/.script_gui/settings.jsonc`, data, {encoding: "utf-8"})
                break;
            case "win32":
                fs.writeFileSync(`${process.env.USERPROFILE}\\.script_gui\\settings.jsonc`, data, {encoding: "utf-8"})
                break;
        }
    })

    ipcMain.on("watch_the_file", (e, dir)=>{
        e.sender.send("watch_the_file_res", dir, fs.readFileSync(dir, {encoding: "utf-8"}));
    })
};

app.whenReady().then(createWindow);
const obj_settings = {
    lastFilesOpen: [],
    styles: {
        body: "default",
        "#task-bar": "default",
        textarea: "default",
        button: "default",
        ".tabs": "default"
    }
};
switch(process.platform){
    case "linux":
        fs.access(`/home/${process.env.USER}/.script_gui`, (err)=>{
            if(err){
                fs.mkdirSync(`/home/${process.env.USER}/.script_gui`);
                fs.writeFileSync(`/home/${process.env.USER}/.script_gui/settings.jsonc`, JSON.stringify(obj_settings, null, 3), {encoding: "utf-8"})
            }
        })
        setting_path = `/home/${process.env.USER}/.script_gui/settings.jsonc`;
        break;
    case "win32":
        fs.access(`${process.env.USERPROFILE}\\.script_gui`, (err)=>{
            if(err){
                fs.mkdirSync(`${process.env.USERPROFILE}\\.script_gui`);

                fs.writeFileSync(`${process.env.USERPROFILE}\\.script_gui\\settings.jsonc`, JSON.stringify(obj_settings, null, 3), {encoding: "utf-8"})
            }
        })
        setting_path = `${process.env.USERPROFILE}\\.script_gui\\settings.jsonc`;
        break;
}

module.exports = {path_settings: setting_path}