const url = "http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521";

function updateStudentsInfo(data){
        console.log(data,"students info")
        const studentName = data.Name;
        const fathersName = data.FatherName;
        const MotherName =  data.MotherName;
        const datOfBirth = data.DOB;
        const rollNum = data.RollNumber;
        const className =  data.ClassName;
        const fatherNameEle = document.getElementById("fatherName");
        const studentNameEle = document.getElementById("studnetName");
        const motherNameEle = document.getElementById("motherName");
        const dobEle= document.getElementById("DOB");
        const rollNumberEle= document.getElementById("rollNumber");
        fatherNameEle.textContent = fathersName;
        studentNameEle.textContent = studentName;
        motherNameEle.textContent = MotherName;
        dobEle.textContent = datOfBirth;
        rollNumberEle.textContent = rollNum;
        document.getElementById("className").textContent = className;
        
}

function marksArray(data){
        const marksList = [];
        let highestScore = null;
        for(let obj of data){
                marksList.push(obj.ScoredMarks);
        }

        if (marksList[0] > marksList[1]){
                highestScore = marksList[0];
        } else if(marksList[0] < marksList[1]){
                highestScore = marksList[1];
        } else{
                highestScore = marksList[0];
        }

        return highestScore;

}

function internalMarks(marksData,examMastersId,id){
        const filterData = marksData.filter(eachData => eachData.ExamMasterID === examMastersId);
        const teluguMarks = filterData.filter(eachData => eachData.ExamSubjectName === "TELUGU");
        const hindiMarks = filterData.filter(eachData => eachData.ExamSubjectName === "HINDI");
        const englishMarks = filterData.filter(eachData => eachData.ExamSubjectName === "ENGLISH");
        const mathsMarks = filterData.filter(eachData => eachData.ExamSubjectName === "MATHMATICS");
        const csMarks = filterData.filter(eachData => eachData.ExamSubjectName === "COMPUTER SCIENCE");
        const ssMarks = filterData.filter(eachData => eachData.ExamSubjectName === "SOCIAL STUDIES");
       

        const bestTeluguMarks = marksArray(teluguMarks);
        const bestHindiMarks = marksArray(hindiMarks);
        const bestEnglishMarks = marksArray(englishMarks);
        const bestMathsMarks = marksArray(mathsMarks);
        const bestCsMarks = marksArray(csMarks);
        const bestSSMarks = marksArray(ssMarks);
        

        const totalInternalMarks = bestTeluguMarks + bestHindiMarks +bestEnglishMarks + bestMathsMarks + bestCsMarks + bestSSMarks;
        console.log(totalInternalMarks)
        document.getElementById(`TotalintTerm${id}`).textContent = totalInternalMarks;
        


        
        const teluguMarksELe = document.getElementById(`intTeluguTerm${id}`);
        teluguMarksELe.textContent = bestTeluguMarks

        const hindiMarksELe = document.getElementById(`intHindiTerm${id}`);
        hindiMarksELe.textContent = bestHindiMarks;

        const englishMarksELe = document.getElementById(`intEnglishTerm${id}`);
        englishMarksELe.textContent =bestEnglishMarks;

        const mathematicsMarksELe = document.getElementById(`intMathsTerm${id}`);
        mathematicsMarksELe.textContent = bestMathsMarks;

        const csMarksELe = document.getElementById(`intCsTerm${id}`);
        csMarksELe.textContent = bestCsMarks

        const ssMarksELe = document.getElementById(`intSSTerm${id}`);
        ssMarksELe.textContent = bestSSMarks
}

function externalMarks(marksData,examMastersId,id){
        const examMasterId1 = marksData.filter(eachObj => eachObj.ExamMasterID === examMastersId);
        
        const teluguMarks = examMasterId1.filter(eachData => eachData.SubjectName === "TELUGU");
        const hindiMarks = examMasterId1.filter(eachData => eachData.SubjectName === "HINDI");
        const englishMarks = examMasterId1.filter(eachData => eachData.SubjectName === "ENGLISH");
        const mathsMarks = examMasterId1.filter(eachData => eachData.SubjectName === "MATHMATICS");
        const csMarks = examMasterId1.filter(eachData => eachData.SubjectName === "COMPUTER SCIENCE");
        const ssMarks = examMasterId1.filter(eachData => eachData.SubjectName === "SOCIAL STUDIES");

        

        const teluguMarksELe = document.getElementById(`extTeluguTerm${id}`);
        teluguMarksELe.textContent = Math.round((teluguMarks[0].Marks));

        const hindiMarksELe = document.getElementById(`extHindiTerm${id}`);
        hindiMarksELe.textContent = Math.round((hindiMarks[0].Marks));

        const englishMarksELe = document.getElementById(`extEnglishTerm${id}`);
        englishMarksELe.textContent = Math.round((englishMarks[0].Marks));

        const mathematicsMarksELe = document.getElementById(`extMathsTerm${id}`);
        mathematicsMarksELe.textContent = Math.round((mathsMarks[0].Marks));

        const csMarksELe = document.getElementById(`extCsTerm${id}`);
        csMarksELe.textContent = Math.round((csMarks[0].Marks));

        const ssMarksELe = document.getElementById(`extSSTerm${id}`);
        ssMarksELe.textContent = Math.round((ssMarks[0].Marks));

        const totalMarks = teluguMarks[0].Marks + hindiMarks[0].Marks +englishMarks[0].Marks + mathsMarks[0].Marks + csMarks[0].Marks+ ssMarks[0].Marks
        document.getElementById(`TotalextTerm${id}`).textContent = totalMarks;

}

function totalMarksObtained(id){
        const teluguIntMarks =  document.getElementById(`intTeluguTerm${id}`);
        const teluguExtMarks = document.getElementById(`extTeluguTerm${id}`);
        const totalTeluguMarks = parseInt(teluguIntMarks.textContent)+ parseInt(teluguExtMarks.textContent);
        document.getElementById(`teluguTotal${id}`).textContent = totalTeluguMarks;

        const hindiIntMarks =  document.getElementById(`intHindiTerm${id}`);
        const hindiExtMarks = document.getElementById(`extHindiTerm${id}`);
        const hinditotalMarks =     parseInt(hindiIntMarks.textContent)+ parseInt(hindiExtMarks.textContent);
        document.getElementById(`hindiTotal${id}`).textContent = hinditotalMarks ;

        const englishIntMarks =  document.getElementById(`intEnglishTerm${id}`);
        const englishExtMarks = document.getElementById(`extEnglishTerm${id}`);
        const totalenglishMarks = parseInt(englishIntMarks.textContent)+ parseInt(englishExtMarks.textContent);
        document.getElementById(`englishTotal${id}`).textContent = totalenglishMarks ;


        const mathsIntMarks =  document.getElementById(`intMathsTerm${id}`);
        const mathsExtMarks = document.getElementById(`extMathsTerm${id}`);
        const totalmathsMarks = parseInt(mathsIntMarks.textContent)+ parseInt(mathsExtMarks.textContent) ;
        document.getElementById(`mathsTotal${id}`).textContent = totalmathsMarks;


        const csIntMarks =  document.getElementById(`intCsTerm${id}`);
        const csExtMarks = document.getElementById(`extCsTerm${id}`);
        const totalcsMarks = parseInt(csIntMarks.textContent)+ parseInt(csExtMarks.textContent);
        document.getElementById(`csTotal${id}`).textContent = totalcsMarks;


        const ssIntMarks =  document.getElementById(`intSSTerm${id}`);
        const ssExtMarks = document.getElementById(`extSSTerm${id}`);
        const totalssMarks =  parseInt(ssIntMarks.textContent)+ parseInt(ssExtMarks.textContent);
        document.getElementById(`ssTotal${id}`).textContent = totalssMarks ;


        const totalTermMarks = totalTeluguMarks + hinditotalMarks+  totalenglishMarks +totalmathsMarks+totalcsMarks+ totalssMarks;
        document.getElementById(`Totalterm${id}`).textContent = totalTermMarks;


}

function finalResults(){
        const teluguFinalMarks = parseInt(document.getElementById("teluguTotal1").textContent) + parseInt(document.getElementById("teluguTotal2").textContent);
        document.getElementById("finalResultTelugu").textContent = teluguFinalMarks;

        const hindiFinalMarks = parseInt(document.getElementById("hindiTotal1").textContent) + parseInt(document.getElementById("hindiTotal2").textContent);
        document.getElementById("finalResultHindi").textContent = hindiFinalMarks;

        const englishFinalMarks = parseInt(document.getElementById("englishTotal1").textContent) + parseInt(document.getElementById("englishTotal2").textContent);
        document.getElementById("finalResultEnglish").textContent = englishFinalMarks;

        const mathsFinalMarks = parseInt(document.getElementById("mathsTotal1").textContent) + parseInt(document.getElementById("mathsTotal2").textContent);
        document.getElementById("finalResultMaths").textContent = mathsFinalMarks;


        const csFinalMarks = parseInt(document.getElementById("csTotal1").textContent) + parseInt(document.getElementById("csTotal2").textContent);
        document.getElementById("finalResultCs").textContent = csFinalMarks;

        const ssFinalMarks = parseInt(document.getElementById("ssTotal1").textContent) + parseInt(document.getElementById("ssTotal2").textContent);
        document.getElementById("finalResultSS").textContent = ssFinalMarks;


        const finalTotalMarks = teluguFinalMarks +  hindiFinalMarks +  englishFinalMarks + mathsFinalMarks + csFinalMarks + ssFinalMarks;
        document.getElementById("bothTermsTotal").textContent = finalTotalMarks;
       
}

function assignGrade(marks){
        let gradeType = null;
        

        if(marks > 90 && marks <= 100){
                gradeType = "A1"
        }else if(marks > 80 && marks <= 90){
                gradeType = "A2"
        }else if(marks > 70 && marks <= 80){
                gradeType = "B1"
        }else if(marks > 60 && marks <= 70){
                gradeType = "B2"
        }else if(marks > 50 && marks <= 60){
                gradeType = "C1"
        }else if(marks > 40 && marks <= 50){
                gradeType = "C2"
        }else if(marks > 33 && marks <= 40){
                gradeType = "D"
        }else if(marks >= 0 && marks <= 33){
                gradeType = "E"
        }

        return gradeType
}

function resultStatus(grade){
        
        if (grade === "E"){
                return "FAILED";
        }else{
                return "PASSED";
        }
}

function grade(){
        const teluguFinalMarks = parseInt(document.getElementById("finalResultTelugu").textContent)/2
        document.getElementById("gradeTelugu").textContent = assignGrade(teluguFinalMarks);
        
        const hindiFinalMarks = parseInt(document.getElementById("finalResultHindi").textContent)/2
        document.getElementById("gradeHindi").textContent = assignGrade(hindiFinalMarks);

        const englishFinalMarks = parseInt(document.getElementById("finalResultEnglish").textContent)/2
        document.getElementById("gradeEnglish").textContent = assignGrade(englishFinalMarks);

        const mathsFinalMarks = parseInt(document.getElementById("finalResultMaths").textContent)/2
        document.getElementById("gradeMaths").textContent = assignGrade(mathsFinalMarks);

        const csFinalMarks = parseInt(document.getElementById("finalResultCs").textContent)/2
        document.getElementById("gradeCs").textContent = assignGrade(csFinalMarks);

        const ssFinalMarks = parseInt(document.getElementById("finalResultSS").textContent)/2
        document.getElementById("gradeSS").textContent = assignGrade(ssFinalMarks);


        const finalTotalMarks = parseInt(document.getElementById("bothTermsTotal").textContent);
        // console.log(finalTotalMarks,"finalTotalMarks")
        const finalmarks = (finalTotalMarks/(200*6))*100;
        document.getElementById("finalGrade").textContent = assignGrade(finalmarks);
        
        document.getElementById("grade") .textContent = assignGrade(finalmarks);
        document.getElementById("percentage") .textContent = finalmarks;


        const grade = assignGrade(finalmarks)
        document.getElementById("result").textContent = resultStatus(grade)


}

const doNetworkCall = async () => {
        let options = {
                method: "GET"
        }
    const response = await fetch(url, options);
    const jsonData = await response.json();
   
   const data = jsonData.Response.ProgressList;
   console.log(data,"from networkCall");
   const examMasterObj = data.ExamMasters
   
   const examMastersIds = [];
   
   for(let obj of examMasterObj){
        examMastersIds.push(obj.ExamMasterID);
   }
   
  const finalMarksData = data.lstStudentInfo[0];
   updateStudentsInfo(finalMarksData);
   internalMarks(finalMarksData.stInternals,examMastersIds[0],1);
   internalMarks(finalMarksData.stInternals,examMastersIds[1],2);
   externalMarks(finalMarksData.lstStudent,examMastersIds[0],1);
   externalMarks(finalMarksData.lstStudent,examMastersIds[1],2);
   totalMarksObtained(1);
   totalMarksObtained(2);
   finalResults();
   grade(); 
};

doNetworkCall();


