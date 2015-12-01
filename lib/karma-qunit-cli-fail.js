QUnit.testDone(function(details) {
    if(details.failed){
        throw new Error(details.name);
    }
});
