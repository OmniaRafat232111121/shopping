const CURRENCY_FORMATTER=new Intl.NumberFormat(undefined,{
  currency: "USD",
  style: "currency",

})
export function formatCurrency(numbe){
    return CURRENCY_FORMATTER.format(number)
}