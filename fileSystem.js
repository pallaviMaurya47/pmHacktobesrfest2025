const os = require("os");
const fs = require("fs");

function getSystemInfo() {
  return `
💻  System Information Report

🕒  Generated at: ${new Date().toLocaleString()}

===========================================
🧠  OS Type: ${os.type()}
 🪟  OS Platform: ${os.platform()}
🧩  OS Arch: ${os.arch()}
🖥️  Hostname: ${os.hostname()}
🏠  Home Directory: ${os.homedir()}

💾  Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
📉  Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
⏱️  System Uptime: ${(os.uptime() / 60).toFixed(2)} minutes

⚙️  CPU Info: ${os
    .cpus()
    .map((cpu, i) => `\n   🔸  Core ${i + 1}: ${cpu.model}`)
    .join("")}
`;
}
let filePath = "./system-info.txt";
const data = getSystemInfo();
console.log(data);

fs.appendFile(filePath, data, (err) => {
  console.log(err);
});
