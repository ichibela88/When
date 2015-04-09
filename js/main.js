(function(){

// The _.map function takes an array and returns another array or an object
// It "maps" frome one value to another 
// Actors who have playe Doctor Who 

var Oscarfilms= [
    { 'number': 1,  'film': "A Beautiful Mind",      'begin': 2000, 'end': 2001 },
    { 'number': 2,  'film': "The Pianist",           'begin': 2002, 'end': 2003 },
    { 'number': 3,  'film': "Million Dollar Baby",   'begin': 2004, 'end': 2005 },
    { 'number': 4,  'film': "The Departed",          'begin': 2006, 'end': 2007 },
    { 'number': 5,  'film': "Slumdog Millionaire",    'begin': 2008, 'end': 2009 },
    { 'number': 6,  'film': "Inception",             'begin': 2010, 'end': 2011 },
    { 'number': 7,  'film': "Argo",                  'begin': 2012, 'end': 2013 },
    { 'number': 8,  'film': "Birdman",               'begin': 2014, 'end': 2015 },
    
        
];

 
console.log(_.findWhere(Oscarfilms, {'film': "Birdman"}));


}).call(this);