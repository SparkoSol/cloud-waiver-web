export function generateMonths(number) {
  const months = ['Month'];
  for (let i = 1; i <= number; i++) {
    months.push(i);
  }

  return months;
}

export function generateYears(startingYear) {
  const currentYear = new Date().getFullYear();
  const years = ['Year'];
  for (let year = startingYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
}

export const cardsData = [{
  id: 1, startIcon: true, title: null, number: null, endIcon: '/pencil.svg',
}, {
  id: 2, startIcon: null, title: 'Total Templates', number: 2, endIcon: '/files2.svg',
}, {
  id: 3, startIcon: null, title: 'Total Signed Waivers', number: 1, endIcon: '/files.svg',
}]

export const DashBoardHeaders = ['ID', 'SIGNED DATE', 'FIRST NAME', 'LAST NAME', 'REFERENCE NO', 'TEMPLATE NAME', 'STATUS']

export const dashboardData = [{
  _id: '1111111',
  signedDate: 'Oct 05, 2023',
  firstName: 'John',
  lastName: 'Doe',
  refrenceNo: 'SPARKO',
  templateName: 'Lorem',
  status: 'Submitted'
}]

export const menuOptions = [{
  url: '/',
  text: 'sparkoSols - sparko.onlinewaiverpro.com'
}, {
  url: '/',
  text: 'Dashboard'
}, {
  url: '/',
  text: 'Settings'
}]

export function limitChars(str, number) {
  return str.slice(0, number) + '...';
}

export const countries = ["Pakistan", "Germany", "United States", "United Kingdom", "France", "Australia", "Canada", "Japan"];