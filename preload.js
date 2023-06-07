/*
 * @Author: bonza bonzaphp@gmail.com
 * @Date: 2023-06-06 15:09:48
 * @LastEditors: bonza bonzaphp@gmail.com
 * @LastEditTime: 2023-06-07 10:34:10
 * @FilePath: \utools\preload.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const fs = require('fs');
const path = require('path');
const { clipboard } = require('electron');

// 获取当前插件的根目录
const pluginDir = path.join(__dirname, '..');

window.exports = {
    // 注意：键对应的是 plugin.json 中的 features.code
    "copy_ssh_pub": {
        // 用于无需 UI 显示，执行一些简单的代码
        // 除此之外，utools还提供了列表、文档等模式
        mode: "none",
        args: {
            enter: (action) => {
                // action = { code, type, payload }
                // utools.copyText(action.payload)
				const filePath = "c:/Users/Administrator/.ssh/id_rsa.pub"
				fs.readFile(filePath, 'utf-8', (err, data) => {
					if (err) {
					  console.error(err);
					  return;
					}
					clipboard.writeText(data);
					// utools.showNotification('文件内容已复制到剪切板');
				  });
                // utools.copyText("ni zhe ge stupid")
				// utools.copyFile('/c/Users/Administrator/.ssh/id_rsa.pub')
                utools.outPlugin()
                utools.hideMainWindow()
                utools.showNotification('已复制')
            }
        }
    }
}