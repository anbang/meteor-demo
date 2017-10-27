//如果数据库是空的，载入3条帖子,如果没有 meteor reset 则不会插入的；
if(Posts.find().count() === 0){
    Posts.insert({
        title: 'server插入的db数据 111111',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'server插入的db数据 22222',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'server插入的db数据 33333',
        url: 'http://themeteorbook.com'
    });
}