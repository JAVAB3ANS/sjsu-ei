"""
Created dictionary that lists all of SJSU's programs and their standards
"""

# "Majors" is a dictionary that lists most of SJSU's undergraduate programs
#key = program of study at SJSU (e.g. Computer Engineering)
#value = eligibility index (minimum number to get admitted)
UG_Programs = {
    Advertising : {
		"EI": 3000,
	},
    Aerospace-Engineering : {
		"EI": 3850,
	},
    African-American-Studies : {
		"EI": 3000,
	},
	Applied-Math : {
		"EI": 3125,
	}
	Art : {
		"EI": 2950,
	}
	Aviation : {
		"EI": 3850,
	}
	Behaviorial-Science : {
		"EI": 3000,
	}
	Biological-Sciences : {
		"EI": 3800,
	}
	Biomedical-Engineering : {
		"EI": 3550,
	}
	Business-Administration : {
		"EI": 3420,
	}
	Chemical-Engineering : {
		"EI": 3000,
	}
	Chemistry-Biochemistry : {
		"EI": 3500,
	}
	Chemistry-BA {
		"EI": 3500,
	}
	Chemistry-BS {
		"EI": 3500,
	}
	Chicanx-Studies {
		"EI": 3000,
	}
	Child-&-Adolescent-Development-MS {
		"EI": 2950,
	}
	Child-&-Adolescent-Development {
		"EI": 2950,
	}
	Chinese {
		"EI": 3000,
	}
	Civil Engineering {
		"EI": 3950,
	}
	Communication Studies {
		"EI": 3000,
	}
	Communicative-Disorders-&-Sciences {
		"EI": 3050,
	}
	Computer-Engineering {
		"EI": 4300,
	}
	Computer-Science {
		"EI": 4825,
	}
	Creative-Arts {
		"EI": 3000,
	}
	Dance {
		"EI": 3000,
	}
	Design-Studies {
		"EI": 2950,
	}
	Earth-Science {
		"EI": 3000,
	}
	Ecology-&-Evolution {
		"EI": 3800,
	}
	Economics-BA {
		"EI": 3000,
	}
	Economics-BS {
		"EI": 3000,
	}
	Electrical-Engineering [
		"EI": 3800,
	}
	Engineering {
		"EI": 3900,
	}
	English {
		"EI": 3000,
	}
	Environmental-Studies {
		"EI": 3000,
	}
	Forensic-Science {
		"EI": 3650,
	}
	French {
		"EI": 3000,
	}
	Geography {
		"EI": 3000,
	}
	Geology {
		"EI": 3000,
	}
	Global-Studies {
		"EI": 3000,
	}
	History {
		"EI": 2975,
	}
	Hospitality-Tourism-&-Event-Management {
		"EI": 2950,
	}
	Humanities {
		"EI": 3000,
	}
	Industrial-&-Systems-Engineering {
		"EI": 3100,
	}
	Industrial-Tech {
		"EI": 3000,
	}
	Japanese {
		"EI": 3000,
	}
	Journalism {
		"EI": 2950,
	}
	Justice-Studies {
		"EI": 3100,
	}
	Kinesiology {
		"EI": 2975,
	}
	Liberal Studies {
		"EI": 3025,
	}
	Linguistics {
		"EI": 3000,
	}
	Marine-Biology {
		"EI": 3800,
	}
	Materials-Engineering {
		"EI": 3300,
	}
	Mathematics {
		"EI": 3050
	}
	Mechanical-Engineering {
		"EI": 3850,
	}
	Meterology {
		"EI": 3000,
	}
	Music {
		"EI": 3000,
	}
	Nutritional-Science {
		"EI": 2975,
	}
	Organizational-Studies {
		"EI": 3000,
	}
	Packaging {
		"EI": 2950,
	}
	Philosophy {
		"EI": 3000,
	}
	Physics {
		"EI": 2950,
	}
	Political-Science {
		"EI": 3300,
	}
	Pre-Nursing {
		"EI": 4350,
	}
	Psychology {
		"EI": 3875,
	}
	Public-Health {
		"EI": 2950,
	}
	Public-Relations {
		"EI": 3000,
	}
	Recreation {
		"EI": 3000,
	}
	Social-Science-SS {
		"EI": 3000,
	}
	Social-Work {
		"EI": 3700,
	}
	Sociology {
		"EI": 3060,
	}
	Software-Engineering {
		"EI": 4350,
	}
	Spanish {
		"EI": 3000,
	}
	Television-Radio-Film {
		"EI": 3000,
	}
	Theatre-Arts {
		"EI": 2950,
	}
	Undeclared {
		"EI": 3300
	}
}

"""
Calculating the Impaction Index for SJSU programs
"""

#This is where I determine the COE total SAT score
#Actual equation in normal form: (SAT Math * 3) + (EBRW)]/2 = COE total SAT score
major_input = input(); 
GPA = float(input("Enter GPA: "));
Location = input("Do you live near SJSU? (yes/no): ");
SAT_Math = int(input("Enter SAT Math score: "));
SAT_EBRW = int(input("Enter SAT English score: "));
COE_TotalScore = int(((SAT_Math * 3) + (SAT_EBRW))/2);

#Determines where applicants get the boost based on location alone
if (Location == "yes"):
  GPA = float(GPA + 0.25);
elif (Location == "no"):
  GPA = GPA;
else:
  GPA = GPA;

#SJSU eligibility index equation 
#[SAT Score Total + (GPA * 800)] = COE impaction index
COE_ImpactionIndex = int(COE_TotalScore + (float(GPA) * 800));
print("Eligbility Index: " + str(COE_ImpactionIndex));

"""
Determining whether Impaction Index Meets/Exceeds the Threshold
"""

#As long as "major_input" includes a key in the "UG_Programs" dictionary sub-program will continue to run
while major_input == UG_Programs.key():
#if COE impaction index is less than the "UG_Programs" dictionary's key's value for 'n' program, print this statement
    if COE_ImpactionIndex < major["EI"]:
	    print("You have not met the minimum CSU eligibility requirements for SJSU.");
#if COE impaction index is equal to the "UG_Programs" dictionary's key's value for 'n' program, print this statement
	elif COE_ImpactionIndex == major["EI"]:
	    print("You have met the minimum CSU eligibility requirements for SJSU."); 
#if COE impaction index greater than the "UG_Programs" dictionary's key's value for 'n' program, print this statement
	else:
	    print("You have exceeded standards and have been conditionally admitted!");




      
