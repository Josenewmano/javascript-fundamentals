const cohort = {
  name: 'Makers 2022',
  id: 1234,
  students : ['Joe', 'Jordan', 'Coral'],
};

const printCohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} in this cohort`);
}

console.log(printCohort(cohort));