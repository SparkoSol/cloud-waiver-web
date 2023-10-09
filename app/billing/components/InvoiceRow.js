const InvoiceRow = ({item}) => {
  return (
    <tr>
      <td className='relative py-4 pl-4 sm:pl-6 pr-3 text-sm whitespace-nowrap'>
        {item.invoice}
      </td>
      <td className='relative py-4 pl-4 sm:pl-6 pr-3 text-sm whitespace-nowrap'>
        {item.period}
      </td>
      <td className='relative py-4 pl-4 sm:pl-6 pr-3 text-sm whitespace-nowrap'>
        {item.total}
      </td>
      <td className='relative py-4 pl-4 sm:pl-6 pr-3 text-sm whitespace-nowrap'>
        {item.status}
      </td>
    </tr>
  )
}

export default InvoiceRow