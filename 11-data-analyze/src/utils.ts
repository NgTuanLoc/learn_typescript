export const dateStringToDate = (dataString: string) => {
   const dateParts = dataString
      .split('/')
      .map((item: string): number => parseInt(item));
    // yyyy, mm-1 (zero index Date object), dd
   return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
