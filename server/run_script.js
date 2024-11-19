const cmd = require("child_process"); 

module.exports = async function(local) {
    cmd.execSync(`node ${local}`);
}