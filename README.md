采用angular内置的validate验证表单合法性</br>
angular检测到form表单时，会根据form名字在该controller的scope下创建这个名字的变量，angular内置了许多directive来验证各个数据项的合法性，通过console.log可知，对于添加了指令的元素，angular会自动添加很多属性，如$invalid,$validate,$invalidators($validate会依次调用$validators上的方法),后者的属性是我们添加的各个验证函数（即指令），本题的难点就在于如何自定义验证指令并添加到该元素对象的$invalidators中去，对此，angular自定义directive中提供了require属性，可以获得该指令的控制器（需要进一步理解，初步理解就是上面所说的添加的属性），由此可以拿到$invalidators并添加自定义的验证函数，函数返回布尔值（也就是指令可以作为布尔值使用），进而验证。</br>
代码中大部分采用了内置的directive，但确认密码需要自定义，指令的scope对象上有两个属性，在模板中指定，分别为该input的值和需要比较的input的值，同时watch需要比较的值，使得需要比较的值一旦改变，也会调用validate来验证合法性</br>
