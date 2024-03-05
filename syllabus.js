var syllabusLinks = {
    "CSE": {
        "1st year": {
            "1st semester": "https://makautexam.net/aicte_details/Syllabus/BTECH.pdf",
            "2nd semester": "https://makautexam.net/aicte_details/Syllabus/BTECH.pdf"
        },
        "2nd year": {
            "3rd semester": "https://makautexam.net/aicte_details/Syllabus/CSE/sem320.pdf",
            "4th semester": "https://makautexam.net/aicte_details/Syllabus/CSE/sem420.pdf"
        },
        "3rd year": {
            "5th semester": "https://makautexam.net/aicte_details/Syllabus/CSE/sem520.pdf",
            "6th semester": "https://makautexam.net/aicte_details/Syllabus/CSE/sem620.pdf"
        },
        "4th year": {
            "7th semester": "https://makautexam.net/aicte_details/Syllabus/CSE/sem720.pdf",
            "8th semester": "https://makautexam.net/aicte_details/Syllabus/CSE/sem820.pdf"
        }
    },
    "CIVIL": {
        "1st year": {
            "1st semester": "https://makautexam.net/aicte_details/Syllabus/BTECH.pdf",
            "2nd semester": "https://makautexam.net/aicte_details/Syllabus/BTECH.pdf"
        },
        "2nd year": {
            "3rd semester": "https://makautexam.net/aicte_details/Syllabus/CE/sem3.pdf",
            "4th semester": "https://makautexam.net/aicte_details/Syllabus/CE/sem4.pdf"
        },
        "3rd year": {
            "5th semester": "https://makautexam.net/aicte_details/Syllabus/CE/sem5.pdf",
            "6th semester": "https://makautexam.net/aicte_details/Syllabus/CE/sem6.pdf"
        },
        "4th year": {
            "7th semester": "https://makautexam.net/aicte_details/Syllabus/CE/sem7.pdf",
            "8th semester": "https://makautexam.net/aicte_details/Syllabus/CE/sem8.pdf"
        }
    }
    // Add links for other streams similarly 
};

function getSyllabusLink() {
    var stream = document.getElementById("streamSelect").value;
    var year = document.getElementById("yearSelect").value;
    var semester = document.getElementById("semesterSelect").value;
    var link = syllabusLinks[stream][year][semester];
    var buttonHTML = "<button  class='btn btn-light'><a href='" + link + "' target='_blank'>Syllabus Link</a></button>";
    document.getElementById("syllabusLink").innerHTML = buttonHTML;
}

function updateSemesterList() {
    var selectedYear = document.getElementById("yearSelect").value;
    var semesterList = document.getElementById("semesterSelect");

    // Clear existing options in the semester list
    semesterList.innerHTML = "";

    // Add semester options based on the selected year
    if (selectedYear === "1st year") {
      addOption(semesterList, "1st semester", "1st semester");
      addOption(semesterList, "2nd semester", "2nd semester");
    } else if (selectedYear === "2nd year") {
      addOption(semesterList, "3rd semester", "3rd semester");
      addOption(semesterList, "4th semester", "4th semester");
    }
    else if (selectedYear === "3rd year") {
      addOption(semesterList, "5th semester", "5th semester");
      addOption(semesterList, "6th semester", "6th semester");
    }
    else if (selectedYear === "4th year") {
      addOption(semesterList, "7th semester", "7th semester");
      addOption(semesterList, "8th semester", "8th semester");
    }
  }

  function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
  }

  // Initial update of the semester list based on the default selected year
  updateSemesterList();