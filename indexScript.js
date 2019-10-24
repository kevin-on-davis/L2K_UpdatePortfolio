var btn_AboutMe = $("#aboutme");
var btn_MyWork = $("#mywork");
var btn_ContactMe = $("#contactme");
var btn_MyResume = $("#myresume");
var btn_MyLinkedIn = $("#mylinkedin");
var btn_MyGitHub = $("#mygithub");

var pg_AboutMe = $("#abt_content");
var pg_MyWork = $("#pg_MyWork");

var skill = ["Backend : PL/SQL", "Backend : T/SQL", "Backend : SQL", "Databases : Oracle", "Databases : SQL Server", "Front End : Oracle Apex", "Front End : Oracle Forms", "Front End : Oracle Reports", "Front End : Jasper Reports", "Front End : Crystal Reports"
, "Full Stack (In Progress) : HTML", "Full Stack (In Progress) : CSS", "Full Stack (In Progress) : Javascript", "Full Stack (In Progress) : APIs", "Full Stack (In Progress) : Node JS"];
var skill_idx = 0;
$("#skill_descriptor").html(skill[skill_idx]);

var marquee = setInterval(function()
{
    if (skill_idx < skill.length - 1)
    {
        skill_idx += 1;
    }
    else
    {
        skill_idx = 0;
    }

    $("#skill_descriptor").html(skill[skill_idx]);
}
, 5000);

btn_AboutMe.on("click", function()
{
    event.preventDefault();
    $(".col-2").css("display", "block");
    pg_AboutMe.css("display", "block");
    // pg_AboutMe.SlideDown("slow");
});
