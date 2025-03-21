function Welcome()
{
    let fname = document.getElementById("name").value;
    // document.write(getElementById("output").innerHTML="Hello " +fname);
    document.getElementById("output").outerHTML="Hello "+fname;

}