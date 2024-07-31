function solution(emergency) {
  return emergency.map(e => emergency.filter(v => e < v).length + 1)
}