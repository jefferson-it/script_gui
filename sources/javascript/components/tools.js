const cmd = require("child_process"); 
const path = require("path");
var server_on = false;

const open_btn = GetElm("#open-file"),
    new_file_btn = GetElm("#new-file"),
    save_btn = GetElm("#save"),
    save_as_btn = GetElm("#save-as"),
    close_btn = GetElm("#close"),
    on_server_btn = GetElm("#on-server"),
    run_script_btn = GetElm("#run-script")

window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key == "s"){
        if(e.shiftKey) SaveFileAs();
        else SaveFile();
    }else if(e.ctrlKey && e.key == "o"){
        OpenFile();
    }else if(e.ctrlKey && e.key == "p"){
        CloseFile();
    }else if(e.ctrlKey && e.key == "n"){
        NewFile();
    }else if(e.ctrlKey && e.key == "l"){
        OnServer();
    }else if(e.ctrlKey && e.key == "5"){
        RunScript();
    }else if(e.key == "s" && e.altKey){
        api.send("get_settings")
    }
    
    api.on("save_file_new_result", (e, res, index)=>{
        if(!res.err){
            all_tabs[index].header = res.name_file;
            all_tabs[index].tab.header = res.name_file;
            all_tabs[index].tab.dir = res.path;
            all_tabs[index].tab.save_val = res.value;
            all_tabs[index].tab.header_text.SetTXT(all_tabs[index].header);
        }else{
            alert(lang == "pt"? "Houve um erro!": "A error occurred!");
        }
    });
    api.on("save_file_result", (e, res, index)=>{
        all_tabs[index].tab.header = all_tabs[index].tab.header.replace("*", "");
        all_tabs[index].tab.save_val = res.val;
        all_tabs[index].tab.header_text.SetTXT(all_tabs[index].header.replace("*", ""));
    });


    api.on("recibe_file", (e, dir, data, err)=>{
        if(err){            
            alert(lang == "pt"? "Houve um erro!": "A error occurred!");
        }else{
            let create = false;
            all_tabs.map((val, i)=>{
                if(val.header == dir.split("/")[dir.split("/").length - 1] && val.tab.dir == dir){
                    create = true;
                }
            })
            if(!create){
                const text = new AreaText(true, data);
                const tab = new TabsModel(text, dir.split("/")[dir.split("/").length - 1], dir, true);
    
                tab.Start();
                tab.save_val = data;
                text.Start();
    
                all_tabs.push({
                    header: tab.header,
                    tab,
                    a_text: text,
                    active: true
                })
    
                tabs_open++;
                tab.feather.Click();
            }
        }
        
    })

    api.on("open_window", (e, url)=>{
        window.open(url);
    })
    api.on("new-file-data", (e, res)=>{
        let exist = false;
        for (const item of all_tabs) {
            if(item.tab.dir == res){
                exist = true;
            }
        }
        if(!exist){
            const text = new AreaText(true, "");
            const tab = new TabsModel(text, res.split("/")[res.split("/").length - 1], res, true);
            tab.Start();
            text.Start();
            all_tabs.push({
                header: tab.header,
                tab,
                a_text: text,
                active: true
            })
            tabs_open++;
            tab.feather.Click();
        }
        return;
    })
})

function OpenFile(){
    api.send("open_file");
}
function NewFile(){
    api.send("new-file")
};
function CloseFile(){
    let open_item;
    try {
        for(let item of all_tabs){
            if(item.active == true){
                api.send("close_file", item.tab?.dir)
                if(item.tab) item.tab?.remove.Click();
                break
            }else{
                open_item = item;
            }
        }
    } catch (error) {}
    try {
        if(open_item)   FocusTab(open_item.tab.feather);
        else FocusTab(all_tabs[all_tabs.length - 1].tab.feather)
    } catch (error) {}
};
function SaveFile(){
    let i = 0;
    for(let item of all_tabs){
        if(item.active == true && item.tab.header == "Escreva * "){
            let save = confirm(lang == "pt"?
                "Há um arquivo novo deseja salvar?":
                "This content is not save, wish save now?");
            if(save){
                api.send("save_file_new", item.a_text.text_area.GetVal(), i);      
            }
            break
        }else if(item.active && item.tab.header.includes("*")){
            api.send("save_file",{val: item.a_text.text_area.GetVal(), dir: item.tab.dir}, i);
            item.tab.header = item.tab.header.replace("*", "");
            item.tab.header_text.SetTXT(item.tab.header.replace("*", ""));
        }
    }
};
function SaveFileAs(){
    let i = 0;
    for(let item of all_tabs){
        if(item.active == true) api.send("save_file_new", item.a_text.text_area.GetVal(), i);
    }
};
function OnServer(){
    let open = false;
    for(let item of all_tabs){
        if(
            item.active == true && 
            (item.tab.header.includes(".html") || item.tab.header.includes(".htm"))){
            if(server_on){
                api.send("open_server", {dir: item.tab.dir})
                GetElm("#on-server").SetTXT(lang == "pt"? "Fechar Server": "End Server");
                server_on = true;
                open = true;
            }else{
                api.send("close_server")
                server_on = false;
                open = true;
                GetElm("#on-server").SetTXT(lang == "pt"? "Ligar Server": "Live Server")
            }
        }
    }
    if(!open){
        alert(lang == "pt"? 
            "Essa função só funciona para arquivos HTML!":
            "This function work only in HTML file!");
    }
};
function RunScript() {
    for(let item of all_tabs){
        if(item.active == true){
            if(path.extname(item.header) == ".js" ){
                new Promise(()=>{
                    cmd.exec(`node ${item.tab.dir}`, (err, res, sin, serr)=>{
                        const res_win = window.open("", "", "width=500,height=500");
                        const ns_res = new ns_Dom_Uni_Cls(res_win.document.body);

                        ns_res.NOS({
                            backgroundColor: "#282A36",
                            color: "#bd93f9",
                        })
                        if(err){
                            res_win.document.body.innerHTML = err;
                        }else{
                            res_win.document.body.innerHTML = res;
                        }
                    });
                });
            }
            
            else alert(lang == "pt"? "Não foi possível rodar, arquivo invalido":
                "Invalid file type!")
            break;
        }
    }
}

open_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "o"
    }))
})
save_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "s"
    }))
})
save_as_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "s",
        shiftKey: true
    }))
})
close_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "p"
    }))
})
new_file_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "n"
    }))
})
on_server_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "l"
    }))
})
run_script_btn.Click(()=>{
    window.dispatchEvent(new KeyboardEvent("keydown", {
        ctrlKey: true, 
        key: "5"
    }))
})

function WelcomeMsg(){
    if(tabs_open == 0){
        GetElm("#welcome").NOS({
            display: "block"
        })
    }else{
        GetElm("#welcome").NOS({
            display: "none"
        })    
    }
};

setInterval(WelcomeMsg)

