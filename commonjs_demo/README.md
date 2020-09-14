回忆一下 commonJS：
Node 应用由模块组成，采用 CommonJS 模块规范。

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

// example.js
var x = 5;
var addX = function (value) {
return value + x;
};
1
2
3
4
5
上面代码中，变量 x 和函数 addX，是当前文件 example.js 私有的，其他文件不可见。

如果想在多个文件分享变量，必须定义为 global 对象的属性。

global.warning = true;
上面代码的 warning 变量，可以被所有文件读取。当然，这样写法是不推荐的。

CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
