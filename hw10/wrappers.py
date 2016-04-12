#Code stolen from Dillon Zhang
import time

def timeFunc(f):
    starting = time.time()

    def timer(*args):
        temp = f(*args)
        print "Time: " + str(time.time() - starting)
        return temp
    return timer

@timeFunc
def killMyself(time):
    for x in range(time):
        print "T_T"
    print "wake me up inside"

#killMyself(10)
