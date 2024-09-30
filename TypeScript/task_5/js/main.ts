// task_5/js/main.ts

// Interface for MajorCredits with a brand to ensure nominal typing
interface MajorCredits {
    credits: number;
    // Brand to uniquely identify this interface
    _majorBrand: 'major';
  }
  
  // Interface for MinorCredits with a brand to ensure nominal typing
  interface MinorCredits {
    credits: number;
    // Brand to uniquely identify this interface
    _minorBrand: 'minor';
  }
  
  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _majorBrand: 'major',
    };
  }
  
  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _minorBrand: 'minor',
    };
  }
  
  // Example usage:
  const major1: MajorCredits = { credits: 3, _majorBrand: 'major' };
  const major2: MajorCredits = { credits: 4, _majorBrand: 'major' };
  
  const minor1: MinorCredits = { credits: 2, _minorBrand: 'minor' };
  const minor2: MinorCredits = { credits: 1, _minorBrand: 'minor' };
  
  const totalMajor = sumMajorCredits(major1, major2);
  const totalMinor = sumMinorCredits(minor1, minor2);
  
  console.log('Total Major Credits:', totalMajor.credits); // Output: 7
  console.log('Total Minor Credits:', totalMinor.credits); // Output: 3
  