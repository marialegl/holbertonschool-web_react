// task_5/js/main.ts
// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'major',
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'minor',
    };
}
// Example usage:
var major1 = { credits: 3, _majorBrand: 'major' };
var major2 = { credits: 4, _majorBrand: 'major' };
var minor1 = { credits: 2, _minorBrand: 'minor' };
var minor2 = { credits: 1, _minorBrand: 'minor' };
var totalMajor = sumMajorCredits(major1, major2);
var totalMinor = sumMinorCredits(minor1, minor2);
console.log('Total Major Credits:', totalMajor.credits); // Output: 7
console.log('Total Minor Credits:', totalMinor.credits); // Output: 3
//# sourceMappingURL=main.js.map