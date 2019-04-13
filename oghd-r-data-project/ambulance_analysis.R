library(readxl)


ambulance_data <- read_excel('2015-2017calls_clean.xlsx')

amb_data_naclear <- na.omit(ambulance_data)

map_data <- ambulance_data[, c(1, 2)]

write.csv(map_data, file = "map_data.csv", fileEncoding = "UTF-8")
