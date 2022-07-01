import matplotlib.pyplot as plt
import matplotlib.image as mpimg

PATH = "./map.png"
img = mpimg.imread(PATH)

#Afg
lat = 34.946222
lon = 69.264639
#UAE
lat = 24.3871971
lon = 54.2777312
#UK
lat = -52.344421
lon = 0.510947
#USA
lat = 37.090240
lon = -95.712891
plt.figure()
plt.imshow(img)
newLog = (((lon+180)/(360))*(9639-361))+359.4
newLat = (((-lat+90)/(180))*(4844-206))+206
txt = "USA=>"+str(lon)+", "+str(lat)
plt.annotate(txt, xy=(newLog, newLat), xycoords='data',
             xytext=(0.5, 0.5), textcoords='figure fraction',
             arrowprops=dict(arrowstyle="->"))
plt.scatter(newLog, newLat, s=5, c='red', marker='o')
plt.show()