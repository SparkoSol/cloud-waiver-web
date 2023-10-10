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

export const billingOptions = [{
  plan:'Growth',
  firstChar:{
    title:'For the first 1 - 550', price:'Flat USD45'
  },
  secondChar:{
    title:'550 - Rest Per Unit', price:'USD0.09'
  }
}, {
  plan:'Free',
  firstChar:{
    title:'For All Per Unit', price:'USD0.15'
  }
}, {
  plan:'Basic',
  firstChar:{
    title:'For the first 1 - 150', price:'Flat USD10'
  },
  secondChar:{
    title:'150 - Rest Per Unit', price:'USD0.1'
  }
}, {
  plan:'Standard',
  firstChar:{
    title:'For the first 1 - 1050', price:'Flat USD89'
  },
  secondChar:{
    title:'1050 - Rest Per Unit', price:'USD0.09'
  }
}, {
  plan:'Enterprise Pro',
  firstChar:{
    title:'For the first 1 - 5050', price:'Flat USD199'
  },
  secondChar:{
    title:'5050 - Rest Per Unit', price:'USD0.04'
  }
}, {
  plan:'Enterprise',
  firstChar:{
    title:'For the first 1 - 2550', price:'Flat USD125'
  },
  secondChar:{
    title:'2550 - Rest Per Unit', price:'USD0.05'
  }
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

export const invoiceData = [
  {
    id:1,
    invoice:'B8DAA400-0001',
    period:'Oct 04, 2023 - Oct 04, 2023',
    total:'$0 USD',
    status:'Paid'
  }
]

export function limitChars(str, number) {
  return str.slice(0, number) + '...';
}

export const countries = ["Pakistan", "Germany", "United States", "United Kingdom", "France", "Australia", "Canada", "Japan"];

export const customerHeaders = [
  'ID','FIRST NAME','LAST NAME','EMAIL','WAIVERS COUNT'
]

export const customerData = [
  {id:'11112222', firstName:'John', lastName:' Doe', email:'gohn@gmail.com', count:1}
]