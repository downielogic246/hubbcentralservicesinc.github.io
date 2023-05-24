 const reports = [
        {
          year: 2023,
          yearReports: [
            {
              id: 4,
              reportName: "/report_may_2023.pdf",
            },
            {
              id: 5,
              reportName: "/report_june_2023.pdf",
            },
            {
              id: 6,
              reportName: "/report_july_2023.pdf",
            },
            {
              id: 7,
              reportName: "/report_august_2023.pdf",
            },
            {
              id: 8,
              reportName: "/report_september_2023.pdf",
            },
            {
              id: 9,
              reportName: "/report_october_2023.pdf",
            },
            {
              id: 10,
              reportName: "/report_november_2023.pdf",
            },
            {
              id: 11,
              reportName: "/report_december_2023.pdf",
            },
          ],
        },
      ];

      const date = new Date();
      let pathName = "https://github.com/mardanca/hubbcentralservicesinc.github.io/blob/02ee9a699e36df2932e6bbe1c974a632cd3c9ed8/Hubb%20Reports/pdf_reports/";

      //console.log(date.getMonth(), date.getFullYear())

       function displayReport() {
        reports.forEach((yearly) => {
          if (yearly.year === date.getFullYear()) {
            yearly.yearReports.forEach((name) => {
              // console.log(name.reportName);
              if (name.id === date.getMonth())
                return (pathName += `${yearly.year}${name.reportName}`);
            });
          }
        });
      }

      export { displayReport };
      export {pathName};