let postsData=[
    {
        title:"这是title1",
        url:"http://zh.discovermeteor.com/chapters/templates/1",
        domain:"www.baidu.com 这里无效"
    },
    {
        title:"这是title2",
        url:"http://zh.discovermeteor.com/chapters/templates/2",
        domain:"www.baidu.com 这里无效"
    },
    {
        title:"这是title3",
        url:"http://zh.discovermeteor.com/chapters/templates/3",
        domain:"www.baidu.com 这里无效"
    }
];

Template.postList.helpers({
    posts:postsData
});