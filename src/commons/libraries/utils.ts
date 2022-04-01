export const checkFileValidation = (files?: File) => {
  if (!files?.size) {
    alert('파일이 존재하지 않습니다.')
    return false
  }
  if (files.size > 10 * 1024 * 1024) {
    alert('파일 용량이 너무 큽니다.(10MB 제한)')
    return false
  }
  if (!files.type.includes('jpeg') && !files.type.includes('png')) {
    alert('파일 형식은 jpeg와 png 파일만 가능합니다.')
    return false
  }
  return true
}

export const getPrice = (price: Number) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getDate = (el) => {
  const temp = new Date(el)
  const yyyy = temp.getFullYear()
  const mm = temp.getMonth() + 1
  const dd = temp.getDate()
  const hour = temp.getHours()
  const min = temp.getMinutes()
  const sec = temp.getSeconds()
  return `${yyyy}${'0' + mm}${dd}${hour}${min}${sec}`
}

export const getDate2 = (el) => {
  const temp = new Date(el)
  const yyyy = temp.getFullYear()
  const mm = temp.getMonth() + 1
  const dd = temp.getDate()
  return `${yyyy}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`
}
