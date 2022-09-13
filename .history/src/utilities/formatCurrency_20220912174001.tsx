const CURRENCY_FORMATTER=new Intl.NumberFormat(undefined,{
  currency: "USD",
  style: "currency",

})
export function formatCurrency(numb){
    return CURRENCY_FORMATTER.format(number)
}