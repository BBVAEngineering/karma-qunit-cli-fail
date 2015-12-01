var __qunit_cli_fail__ = function(details) {
    if(details.failed){
        throw new Error(details.name);
    }
};

if(QUnit && typeof QUnit.testDone === 'function'){
    QUnit.testDone(__qunit_cli_fail__);
}else if(testDone === 'function'){
    testDone(__qunit_cli_fail__);
}
