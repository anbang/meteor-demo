//第一，我们告诉路由器使用我们刚刚创建的 layout 模板作为所有路由的默认布局。
Router.configure({
    layoutTemplate:"layout",
    loadingTemplate:"loading",
    waitOn:function () {
        return Meteor.subscribe('allPosts');
    }
});

//定义了一个名为 postList 的路由规则，并映射到 / 路径
Router.route("/",{name:"postList"});
Router.route("/posts/:_id",
    {
        name:"postPage",
        data:function () {
            //从 URL 上获取 _id ，并通过它找到我们的帖子从而获得正确的数据源：
            return Posts.findOne(this.params._id);
        }
    }
);