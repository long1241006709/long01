/**
 * Created by Administrator on 2017/5/9.
 */
        var fs = require('fs');
        module.exports = {
            a:function(name,name1){
                fs.readFile(name,'utf-8',function(err,data){
                    if(err) throw err;
                    fs.appendFile(name1,data,function(err){
                        if(err) throw err;
                        console.log('非覆盖复制');
                    })
                    console.log(fs.readFileSync('demo5.txt', 'utf-8'));
                })
            },
            b:function(name){
                fs.exists(name,function(result){
                    if(result){
                        fs.stat(name,function(err,stats){
                            console.log(stats);
                            stats.isDirectory()?console.log('是文件夹'):console.log('是文件')
                        })
                    }
                    else{
                        console.log('文件不存在');
                    }
                })
            },
            c:function(name,rename){
                fs.rename(name,rename,function(err){
                    if(err) throw  err;
                })
            },
            d:function(name){
                    fs.readFile(name,'utf-8',function(err,data){
                        if(err) throw err;
                        console.log('文件读取成功');
                    })
            },
            e:function(name){
                fs.readFile(name,'utf-8',function(err,data){
                    if(err){
                        throw err;
                    }else{
                        console.log('1');
                    }
                })
            }
        }


