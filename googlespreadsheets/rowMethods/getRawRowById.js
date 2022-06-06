export const getRawRowById = (rows, searchId) => {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].id === searchId) return rows[i];
  }
}

export default getRawRowById;