api.send("get_load");
api.on("load_default", (e, res)=>{
    const object = ToObj(res);
    api.on("recibe_file", (e,  dir, data, err)=>{
        if(!err || !(object.lastFilesOpen.includes(dir))){
            object.lastFilesOpen.push(dir);
            api.send("save_setting", ToJSON(object));
        }
    })
    api.on("new-file-data", (e,  dir, data, err)=>{
        if(!err || !(object.lastFilesOpen.includes(dir))){
            object.lastFilesOpen.push(dir);
            api.send("save_setting", ToJSON(object));
        }
    })
    api.on("save_file_new_result", (e, res)=>{
        if((object.lastFilesOpen.includes(res.path))){
            object.lastFilesOpen.push(res.path);
            api.send("save_setting", ToJSON(object));
        }
    })
    api.on("close_file_f", (e, dir)=>{
        let i = 0;
        for(let item of object.lastFilesOpen){
            if(item == dir) object.lastFilesOpen.splice(i, 1)
            i++;
        }
        api.send("save_setting", ToJSON(object));
    })

    api.on("render_last_files", (e, datas)=>{
        for(let data of datas){
            let create = false;
            all_tabs.map((val, i)=>{
                if(val.header == data.dir.split("/")[data.dir.split("/").length - 1] && val.tab.dir == data.dir){
                    create = true;
                }
            })
            if(!create){
                const text = new AreaText(true, data.data);
                const tab = new TabsModel(text, data.dir.split("/")[data.dir.split("/").length - 1], data.dir, true);
    
                tab.Start();
                tab.save_val = data.data;
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

    api.send("get_files", object.lastFilesOpen)

    for (const name_item of Object.keys(object.styles)) {
        if(typeof object.styles[name_item] == "object") SetStyle(object.styles[name_item], name_item)
    }
})


api.on("reload_page", (e)=>{
    location.reload();
});