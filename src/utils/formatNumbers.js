import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function formatDate(date) {
  return Intl.DateTimeFormat('pt-BR').format(new Date(date));
}

export function formatCurrencyNumber(number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(number);
}

export function formatDecimalNumber(number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(number);
}
