/**
 * Copyright 2021 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__ee_confusionmatrix_accuracy]
// Construct a confusion matrix from an array (rows are actual values,
// columns are predicted values). We construct a confusion matrix here for
// brevity and clear visualization, in most applications the confusion matrix
// will be generated from ee.Classifier.confusionMatrix.
var array = ee.Array([[32, 0, 0,  0,  1, 0],
                      [ 0, 5, 0,  0,  1, 0],
                      [ 0, 0, 1,  3,  0, 0],
                      [ 0, 1, 4, 26,  8, 0],
                      [ 0, 0, 0,  7, 15, 0],
                      [ 0, 0, 0,  1,  0, 5]]);
var confusionMatrix = ee.ConfusionMatrix({array: array, order: null});
print("Constructed confusion matrix", confusionMatrix);


// Calculate accuracy metrics.
print("Overall accuracy", confusionMatrix.accuracy());
// expected output: 0.7636

print("Consumer's accuracy", confusionMatrix.consumersAccuracy());
// expected output: [[1, 0.8333, 0.2, 0.7027, 0.6, 1]]

print("Producer's accuracy", confusionMatrix.producersAccuracy());
// expected output: [[0.9696], [0.8333], [0.25], [0.6666], [0.6818], [0.8333]]

print('Kappa statistic', confusionMatrix.kappa());
// expected output: 0.6809
// [END earthengine__apidocs__ee_confusionmatrix_accuracy]
