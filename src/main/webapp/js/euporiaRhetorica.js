function ud(txt) { //update
    //$("#status").html("updating...");
    $.ajax({
        method: "GET",
        url: "parser.jsp",
        data: {
            inputStr: txt
        }
    }).done(function (msg) {
        var editor = ace.edit("aceEditor");
            var session = editor.session;
            session.setUseWrapMode(true);
            session.setWrapLimitRange(160, 160);
            editor.setTheme("ace/theme/rhetorica");
            editor.getSession().setMode("ace/mode/rhetorica");
            editor.setOptions({maxLines: 25, fontSize: "16pt"});
            editor.autoComplete = false;
            editor.setShowPrintMargin(false);
            editor.setBehavioursEnabled(false);
            editor.resize();
            ace.edit('aceEditor').setValue(msg);
        return msg;
    });
}
