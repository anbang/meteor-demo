//第一，我们告诉路由器使用我们刚刚创建的 layout 模板作为所有路由的默认布局。
Router.configure({
    layoutTemplate:"layout",
    loadingTemplate:"loading",
    notFoundTemplate:'notFound',
    waitOn:function () {
        return Meteor.subscribe('allPosts');
    }
});

Router.onBeforeAction('dataNotFound',{only:"postPage"});//没有找到数据的时候


//定义了一个名为 postList 的路由规则，并映射到 / 路径
Router.route("/",{name:"postList"});
Router.route("/posts/:_id",
    {
        name:"postPage",
        data:function () {
            //从 URL 上获取 _id ，并通过它获得正确的数据源（否则就没有数据用了）：
            return Posts.findOne(this.params._id);
        }
    }
);

//提交
Router.route('/submit',{name:"postSubmit"});