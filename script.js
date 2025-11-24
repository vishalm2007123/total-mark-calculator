function calculate() {

    let a = Number(document.getElementById("sub1").value);
    let b = Number(document.getElementById("sub2").value);
    let c = Number(document.getElementById("sub3").value);
    let d = Number(document.getElementById("sub4").value);
    let e = Number(document.getElementById("sub5").value);

    let avg = (a + b + c + d + e) / 5;

    document.getElementById("showAverage").textContent = "Average Marks: " + avg.toFixed(2);

    let grade = "";

    if (avg >= 90) grade = "A+";
    else if (avg >= 80) grade = "A";
    else if (avg >= 70) grade = "B";
    else if (avg >= 60) grade = "C";
    else if (avg >= 50) grade = "D";
    else grade = "Fail";

    document.getElementById("showGrade").textContent = "Grade: " + grade;
}
