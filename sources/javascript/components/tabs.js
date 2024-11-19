const max_tab = 5;
const all_tabs = [];
let tabs_open = 0;
let matriz_file = [];

class TabsModel extends NS_Component{
    constructor(text_area, header, dir, active){
        super({}, {main: GetElm("#tab-cont")}, false);
        if(tabs_open < max_tab){
            this.feather = CreateElm("div", {
                class: ["tabs"]
            });

            this.remove = CreateElm("p", {
                text: "x"
            });
    
            this.header = header;
            this.dir = dir;
            this.save_val = "";
            this.text_area = text_area;
    
            this.header_text = CreateElm("p", {
                text: this.header
            });
    
            this.header_text.Append(this.feather)
            this.remove.Append(this.feather)

            if(active) this.feather.NOS({
                backgroundColor: "#4538b9"
            });

            this.feather.Click(()=>{
                FocusTab(this.feather);
            })
            this.remove.Click(()=>{
                let open_item;
                all_tabs.map((val, i)=>{
                    if(this.header.includes("*")){
                        let save = confirm(lang == "pt"?
                            "O arquivo foi modificado, deseja salvar antes?":
                            "The modified file, wish to save before?");
                        if(save){
                            api.send("save_file", this.text_area.text_area.GetVal(), i);      
                        }
                    }
                    if(val.tab.feather == this.feather){
                        api.send("close_file", this.dir)
                        all_tabs.splice(i, 1);
                        text_area.Remove();
                        this.Remove();
                        tabs_open--;
                    }else{
                        open_item = val;
                    }
                });
                try {
                    if(open_item)   FocusTab(open_item?.tab.feather);
                    else FocusTab(all_tabs[all_tabs.length - 1].tab.feather)                        
                } catch (error) {
                    
                }
            });

            text_area.text_area.Keydown((key)=>{
                if(!this.header.includes("*")){
                    if(text_area.text_area.GetVal() != this.save_val){
                        this.header += "*";
                        this.header_text.SetTXT(this.header)
                    }
                }else{
                    if(text_area.text_area.GetVal() == this.save_val){
                        this.header = this.header.replace("*", "");
                        this.header_text.SetTXT(this.header)
                    }
                }
            })

            setInterval(()=>{
                api.send("watch_the_file", this.dir)
            }, 1000)

            api.on("watch_the_file_res", (e, dir, data)=>{
                if(dir == this.dir){
                    if((
                        (data != this.text_area.text_area.GetVal())
                        && (data != this.save_val)
                        && (this.save_val == this.text_area.text_area.GetVal())
                        ) && 
                        (!this.header.includes("*"))){
                        this.save_val = data;
                        this.text_area.text_area.SetVal(data);
                    }
                }
            })

        }else{
            alert(lang == "pt"? "Você só pode abrir 5 abas":
                "You don't can open more five tabs!"
            )   
        }        
    }
}
class AreaText extends NS_Component{
    constructor(active=true, value=""){
        super({}, {main: GetElm("#area-cont")}, false);

        this.document = "";

        this.feather.SetClass("area_text");

        this.text_area = CreateElm("textarea");

        this.text_area.Append(this.feather);

        if(!active) this.feather.NOS({
            display: "none"
        })

        this.text_area.SetVal(value);
    }
}

function FocusTab(tab){
    let i = 0;
    for(let item of all_tabs){
        if(tab == item.tab.feather){
            item.a_text.feather.NOS({
                display: "block"
            });
            item.tab.feather.NOS({
                backgroundColor: "#4538b9"
            });
            all_tabs[i].active = true;
        }else{
            item.a_text.feather.NOS({
                display: "none"
            })
            all_tabs[i].active = false;
            item.tab.feather.NOS({
                backgroundColor: "#3768b1"
            });
        }
        i++;
    }
}
