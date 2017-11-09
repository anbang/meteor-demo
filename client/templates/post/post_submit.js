Template.postSubmit.events({
    'submit form':function (e) {
        e.preventDefault();
        let targetEve=e.target;
        let post={
            url:targetEve.find("[name=url]").val(),
            title:targetEve.find("[name=title]").val(),
        };
        post._id=Posts.insert(post);
        Route.go('postPage',post);
    }
});