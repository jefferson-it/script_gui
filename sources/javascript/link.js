const help = GetElm("#help"),
    init_help = GetElm("#init-help"),
    english_version = GetElm("#english-v"),
    portuguese_version = GetElm("#portuguese-v"),
    all_links = GetListElm("link-author");

    for(let item of all_links.elms){
        item.Click(()=>{
            window.open(item.to.getAttribute("url"));
        });
    };

    english_version.Click(()=>{
        location.href = "./index-en.html";
    });
    portuguese_version.Click(()=>{
        location.href = "./index.html";
    });

    help.Click(()=>{
        location.href = lang == "pt"?
            "./help/index.html":
            "./help/index-en.html";
    })
    init_help.Click(()=>{
        location.href = lang == "pt"?
            "./help/index.html":
            "./help/index-en.html";
    })

GetElm("#init-open").Click(() => open_btn.Click())
GetElm("#init-new").Click(() => new_file_btn.Click())