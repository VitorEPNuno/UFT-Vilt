Const desiredScore = 9.5 

Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_

foo = Browser("Advantage Shopping"). _Page("Advantage Shopping"). _WebElement("Score").Exist (20)
currentScore = CDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml"))

print currentScore &"|"& desiredScore &"|"& currentScore > desiredScore\

If currentScore>=desiredScore Then
	Reporter.ReportEvent micPass, "checkScore", "Score exceeded the desired value of" & desiredScore
	Else 
	Reporter.ReportEvent micFail, "checkScore", "Score did not exceeded the desired value of" & desiredScore
End If



Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf4.xml_;_
