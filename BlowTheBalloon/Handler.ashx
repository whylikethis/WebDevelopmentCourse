<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using System.Xml;
using Newtonsoft.Json;

public class Handler : IHttpHandler
{


    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(context.Server.MapPath("~/XML/GameXML.xml"));



        string GameCode = context.Request["GameCode"]; // חשוב לשים לב שזה אותו שם משתנה כמו באנימייט

        XmlNode gameNode = myDoc.SelectSingleNode("/quizTree/topic[@GameCode='" + GameCode + "']");

        if (gameNode != null)
        {
            string jsonText = JsonConvert.SerializeXmlNode(gameNode);

            context.Response.Write(jsonText);
            Console.Write(jsonText);
        }
        else
        {
            context.Response.Write("לא נמצא משחק");
        }
    }

    public bool IsReusable
    {
        get
        {
            return true;
        }
    }
}
















