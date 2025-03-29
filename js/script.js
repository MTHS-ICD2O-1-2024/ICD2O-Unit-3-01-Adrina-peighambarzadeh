// Copyright (c) 2025 Adrina. peighambarzadeh All rights reserved
//
// Created by: Adrina. peighambarzadeh
// Created on: mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle() {
  // input
  const baseOfTriangle = parseFloat(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const areaOfTriangle = (1 / 2) * baseOfTriangle * heightOfTriangle

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle.toFixed(2) + ' cm²'
}