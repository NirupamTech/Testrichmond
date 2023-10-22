function generateTimetable() {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const studyTime = parseInt(document.getElementById('studyTime').value);

  const formulasContent = getFormulasBySubject(subject);

  const content = `
    Subject: ${subject}
    Difficulty: ${difficulty}
    Total Study Time: ${studyTime} minutes

    Important Topics:
    ${getTopicsBySubject(subject)}

    Formulas:
    ${formulasContent}
  };

  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Study Timetable</title></head><body>');
  printWindow.document.write('<pre>' + content + '</pre>');
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Print the window
  printWindow.print();
}

// Function to get topics based on subject
function getTopicsBySubject(subject) {
  // Add logic to get topics based on subject
  // This is just a placeholder
  return 'Topics for this subject:\nTopic 1: ...\nTopic 2: ...';
}
