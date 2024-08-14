function UsernameValidation(){
    var fname = regform.form.value;
    var splchar = "!@#$%^&*()+=-[]\';,.:<>?~";
    if(fname!=""&&fname.length>=6){
        for(var i=0;i<fname.length;i++){
            if(splchar.indexOf(fname[i])!=-1){
                alert("Username should not contain special characters");
            }
        }
    }

}

function pwd(){
    var pw=regform.form.value;
    var cpw = regform.cpwd.value;
    if(pw.length<6){
        alert("password is should be atleast 6 characters long") 
    }
}