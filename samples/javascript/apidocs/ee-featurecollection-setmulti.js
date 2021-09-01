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

// [START earthengine__apidocs__ee_featurecollection_setmulti]
// An empty FeatureCollection for basic demonstration.
var fc = ee.FeatureCollection([]);

fc = fc.setMulti({
  key_1: ee.Array([1, 2, 3]),
  key_2: ee.Image(0),
  key_3: ee.Feature(null)
});
print('New FeatureCollection properties added', fc);

// Overwrite an existing property.
fc = fc.setMulti({key_1: 'overwritten'});
print('FeatureCollection property overwritten', fc);
// [END earthengine__apidocs__ee_featurecollection_setmulti]
