Meteor.publish('allPosts',function () {
    return Posts.find();
});

Meteor.publish('authorPosts',function (author) {
    return Posts.find(
        {
            "author":author,
            "flagged":false,
        },
        {
            "fields":{
                date:false
            }
        }
    );
});