const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 1500);
    });
  };
  
  const accessData = async () => {
    try {
      const result = await fetchData();
      console.log(result.message);
    } catch (error) {
      console.error(error);
    }
  };
  
  accessData();
  