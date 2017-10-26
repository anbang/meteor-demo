let domains=function () {
    let a=document.createElement('a');
    a.href=this.url;
    // console.dir(a);
    return a.hostname;
};

Template.postItem.helpers({
    domain:domains
});