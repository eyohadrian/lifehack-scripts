// Know how many lines have you written on PR
Array.from(document.querySelectorAll("#commit-files-summary .lines-added")).map(s => s.innerText).map(t => t.match(/\d+/)[0]).map(i => parseInt(i, 10)).reduce((prev, curr) => prev + curr);

// Know how many lines have you removed on PR
Array.from(document.querySelectorAll("#commit-files-summary .lines-removed")).map(s => s.innerText).map(t => t.match(/\d+/)[0]).map(i => parseInt(i, 10)).reduce((prev, curr) => prev + curr);